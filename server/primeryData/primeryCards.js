const { Card } = require("../Routes/Cards/cardModel");
const User = require("../Routes/Users/userModel");
const chalk = require("chalk");
const { generateHashPassword } = require("../services/bcrypt");

const data = {
  users: [
    {
      name: "user",
      email: "user@gmail.com",
      password: "User!123456",
      biz: false,
    },
    {
      name: "admin",
      email: "admin@gmail.com",
      password: "Admin!123456",
      biz: true,
      isAdmin: true,
    },
    {
      name: "business",
      email: "business@gmail.com",
      password: "Biz!123456",
      biz: true,
      isAdmin: false,
    },
  ],
  cards: [
    {
      title: "Bouquets",
      description: "Bouquets of flower arrangements",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/11/29/06/49/roses-1867911_1280.jpg",
        alt: "flower arrangements",
      },
      bizNumber: "0000001",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "Bridal",
      description: "Bridal bouquets",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2018/02/27/11/22/flower-3185225_1280.jpg",
        alt: "Bridal bouquets",
      },
      bizNumber: "0000002",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "Flower crown",
      description: "Flower crown",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/11/29/06/32/accessory-1867818_1280.jpg",
        alt: "Flower crown",
      },
      bizNumber: "0000003",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "Table centers",
      description: "Table centers",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2020/09/18/21/13/wedding-photography-5582980_1280.jpg",
        alt: "Table centers",
      },
      bizNumber: "0000004",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "wedding",
      description: "wedding",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2017/08/23/18/08/mexico-2673734_1280.jpg",
        alt: "wedding",
      },
      bizNumber: "0000005",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "Wedding car",
      description: "Wedding car",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2020/01/10/09/59/wedding-4754935_1280.jpg",
        alt: "Wedding car",
      },
      bizNumber: "0000006",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "Flower pots",
      description: "Flower pots",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2015/01/10/14/32/orchids-595242_1280.jpg",
        alt: "Flower pots",
      },
      bizNumber: "0000007",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
    {
      title: "Special flowers",
      description: "Special flowers",
      address: "Kfar-saba",
      phone: "0523711115",
      image: {
        url: "https://cdn.pixabay.com/photo/2022/05/12/21/00/flower-7192359_1280.jpg",
        alt: "Special flowers",
      },
      bizNumber: "0000008",
      likes: [],
      user_id: "621f3f27dde069e62aa3bcab",
    },
  ],
};

async function primaryUsers(user) {
  try {
    user = new User(user);
    user.password = generateHashPassword(user.password);
    await user.save();
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

async function primaryCards(card) {
  try {
    card = new Card(card);
    await card.save();
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

const primaryData = () => {
  for (let i of data.users) {
    primaryUsers(i);
  }
  for (let i of data.cards) {
    primaryCards(i);
  }
};

module.exports = primaryData;
