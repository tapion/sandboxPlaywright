import { test as base } from "@playwright/test";
import FindReservation from "../pages/FindReservation";

export const test = base.extend<{
  findReservation: FindReservation;
}>({
  findReservation: async ({ page }, use) => {
    await use(new FindReservation(page));
  },
});

// type TestFixtures = {
//   findReservation: (id: string) => Promise<any>;
// };

// const test = base.extend<TestFixtures>({
//   findReservation: async ({}, use) => {
//     const findReservation = async (id: string) => {
//       // Your logic to find the reservation goes here.
//       return { id, status: 'found' }; // Example response
//     };

//     await use(findReservation);
//   },
// });

// export { test };