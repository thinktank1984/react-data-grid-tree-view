import faker from "faker";

function createFakeRow(index) {
  return {
    id: index,
    avatar: faker.image.avatar(),
    county: faker.address.county(),
    email: faker.internet.email(),
    title: faker.name.prefix(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode(),
    date: faker.date.past().toLocaleDateString(),
    jobTitle: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase(),
    companyName: faker.company.companyName(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType(),
    phone: faker.phone.phoneNumber()
  };
}

const createChildRows = count => {
  return [...Array(count).keys()].map(i => createFakeRow(i));
};
export default function createRowData(count) {
  return [...Array(count).keys()].map(i => {
    const teamMembers = createChildRows(3);
    return { ...createFakeRow(i), teamMembers };
  });
}
