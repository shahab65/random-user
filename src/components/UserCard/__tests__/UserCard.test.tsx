import { fireEvent, render, screen } from "@testing-library/react";
import UserCard from "../index";

test("renders user info", () => {
  render(
    <UserCard
      firstName={"Jon"}
      lastName={"Snow"}
      image={
        "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png?20190824000237"
      }
      country={"North"}
      isFetching={false}
      onFetchRandomUser={() => {}}
    />
  );
  const fullNameElement = screen.getByTestId("fullName");
  const countryElement = screen.getByTestId("country");
  expect(fullNameElement.textContent).toBe("Jon Snow");
  expect(countryElement.textContent).toBe("North");
});

test("refetch after clicking on show button", () => {
  const refetch = jest.fn();

  render(
    <UserCard
      firstName={"Jon"}
      lastName={"Snow"}
      image={
        "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png?20190824000237"
      }
      country={"North"}
      isFetching={false}
      onFetchRandomUser={refetch}
    />
  );
  const showButtonElement = screen.getByText("Show");
  fireEvent.click(showButtonElement);
  expect(refetch).toHaveBeenCalled();
});
