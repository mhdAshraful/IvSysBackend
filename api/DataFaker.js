import { faker } from "@faker-js/faker";


export default function DataFaker() {
  // emptyarrayof 800
  const totalusers = new Array(8);
  const totalProductsSold = 419;
  // empty object of 200

  const totalOrders = new Array(60);
  const totalOrderDetails = new Array(totalOrders.lenght);
  // const totalreviews = new Object();
  const totalCategories = 3;

  const createRandomUser = () => {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });

    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      sex,
      firstName,
      lastName,
      email,
    };
  };

  for (let i = 0; i < totalusers.length; i++) {
    totalusers[i] = createRandomUser();
  }
  const totalNewUsers = totalusers.slice(0, 4);
  /* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Creating singele random order details                                   │
  └─────────────────────────────────────────────────────────────────────────┘
 */
  const createOrders = () => {
    return {
      _id: faker.string.uuid(),
      customerId: totalusers[Math.floor(Math.random() * totalusers.length)],
      productId:
        totalProductsSold[Math.floor(Math.random() * totalProductsSold.length)],
      quantity: Math.ceil(Math.random() * 10),
      orderDate: faker.date.between({ from: '2023-01-01', to: '2023-12-25' }), // '2026-05-16T02:22:53.002Z'
      price: faker.commerce.price({ min: 350, max: 3300 }),
      orderType: Math.ceil(Math.random() * 10) % 2 === 0 ? "Online" : "Offline",
    };
  };
  /* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ total order details loop                                                │
  └─────────────────────────────────────────────────────────────────────────┘
 */

  for (let i = 0; i < totalOrders.length; i++) {
    totalOrderDetails[i] = createOrders();

  }


  /* 
    ┌─────────────────────────────────────────────────────────────────────────┐
    │ total refunds of 11%                                                    │
    └─────────────────────────────────────────────────────────────────────────┘
   */

  const refundof10percentorder = (array) => {
    const copyArray = array.slice();
    const lengthof10 = array.length * 0.1;
    const newArray = new Array(Math.floor(Math.random() * lengthof10));

    for (let i = 0; i < lengthof10; i++) {
      newArray[i] = copyArray.splice(Math.floor(Math.random() * copyArray.length), 1);
    }

    return newArray;

  }
  const totalRefunds = refundof10percentorder(totalOrderDetails);

  // final return
  return {
    totalusers,
    totalOrderDetails,
    totalNewUsers,
    totalRefunds
  };
}
