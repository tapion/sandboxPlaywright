// import { PlaywrightTestFixtures } from "@playwright/test";
import FindReservation from "./tests/pages/FindReservation";

// Define the shape of your custom fixture
interface CustomFixtures {
  findReservation: (reservationId: string) => Promise<FindReservation>; 
  // Add other custom fixtures as needed
}

// Extend Playwright's base fixtures interface
declare module "@playwright/test" {
  interface PlaywrightTestFixtures extends CustomFixtures {}
}