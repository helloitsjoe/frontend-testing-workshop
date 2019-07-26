import { formatUserData } from "../../challengeComponents/utilities/formatUserData";
import { mockUserData } from "../../challengeComponents/utilities/mockUserData";

/**
 * Current user data is an array of objects in the following shape
 * (omitting some properties we don't care about)
 *
 * {
 *    name: {
 *      first,
 *      last
 *    },
 *    email,
 *    login: {
 *       uuid
 *    },
 *    dob: {
 *      age
 *    }
 * }
 */

describe.skip("formatUserData function", () => {
  it("Returns an array of objects with uuid identifiers, and fields of user data", () => {
    expect(formatUserData(mockUserData)).toEqual({
      "a385dff9-0ff3-49db-abad-1918db5e9dff": {
        age: 23,
        email: "christy.johnson@example.com",
        firstName: "christy",
        lastName: "johnson",
        uuid: "a385dff9-0ff3-49db-abad-1918db5e9dff"
      },
      "b9f2cd17-49a2-4614-af76-cd3e9ed2a51e": {
        age: 64,
        email: "olivia.morgan@example.com",
        firstName: "olivia",
        lastName: "morgan",
        uuid: "b9f2cd17-49a2-4614-af76-cd3e9ed2a51e"
      },
      "bcf2a675-0f78-442c-a1ec-ed0983623e7e": {
        age: 44,
        email: "ülkü.uluhan@example.com",
        firstName: "ülkü",
        lastName: "uluhan",
        uuid: "bcf2a675-0f78-442c-a1ec-ed0983623e7e"
      }
    });
  });
  it("Returns an empty array is the argument is falsey or not an array", () => {
    expect(formatUserData({})).toEqual([]);
    expect(formatUserData(null)).toEqual([]);
    expect(formatUserData(undefined)).toEqual([]);
  });
});
