import express, { Application } from 'express';
import migrate from './migrations';
import Share from './models/share';
import UserShare from './models/user_share';
import { Op } from 'sequelize';
import bodyParser from 'body-parser';
import User from './models/user';

const port = process.env.SERVER_PORT ?? 8000;
const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
  
migrate();

app.post('/sell', async (req, res) => {
  try {
    const selectedShare = await Share.findOne({ where: { name: req.body.share } });

    //check if share is already exists
    if(selectedShare === null) {
      res.status(404).json({ message: 'Share not found!' });
    }

    UserShare.destroy({
      where: {
        [Op.and]: [
          {user_id: req.body.user_id},
          {share_id: selectedShare?.dataValues.id},
        ]
      },
    });

    res.status(200).json({ name: 'Sell is successful!'});
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'An error occured!' });
  }
});

app.post('/buy', async (req, res) => {
  try {
    const selectedShare = await Share.findOne({ where: { name: req.body.share, amount: {
      [Op.gt]: 0
    } } });

    //check if share is already exists
    if(selectedShare === null) {
      res.status(404).json({ message: 'Share not found!' });
      return;
    }

    const selectedUser = await User.findOne({ where: { id: req.body.user_id } });

    //check if user is already exists
    if(selectedUser === null) {
      res.status(404).json({ message: 'User not found!' });
      return;
    }

    const userShare = await UserShare.findOne({ where: { id: req.body.user_id, share_id: selectedShare?.dataValues.id } });

    //if user has alreadh bought then increase the amount
    if(!userShare)
      UserShare.create({user_id: selectedUser?.dataValues.id, share_id: selectedShare?.dataValues.id, price: selectedShare?.dataValues.price, amount: 1});
    else
      UserShare.update({ amount: userShare?.dataValues.amount+1 }, {
        where: {
          [Op.and]: [
            {user_id: selectedUser?.dataValues.id},
            {share_id: selectedShare?.dataValues.id},
          ]
        }
      });

    await Share.update({ amount: selectedShare.dataValues.amount-1 }, {
      where: {
        name: selectedShare.dataValues.name
      }
    });

    res.status(200).json({ name: 'Buy is successful!'});
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'An error occured!' });
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});