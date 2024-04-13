enum Subscription {
  STANDARD = 10.0,
  FREE = 0,
  PREMIUM = 25,
  ENTERPRISE = 100,
}

class Customer {
  constructor(
    public id: number,
    public name: string,
    public subscription: Subscription
  ) {}

  isPaying(): boolean {
    return this.subscription > 0;
  }
}

class CustomersManager {
  constructor(private customers: Customer[]) {}

  processCustomer(customer: Customer): void {
    customer.isPaying()
      ? this.processPremium(customer)
      : this.processFreemium(customer);
  }

  private processPremium(customer: Customer): void {
    // Do some service logic here
    console.log("Paying customer processed");
  }

  private processFreemium(customer: Customer): void {
    // Do some service logic here
    console.log("Freemium customer processed");
  }

  getCustomersByType(subscription: Subscription): Customer[] {
    // Is this efficient? When and how could it be improved?
    return this.customers.filter(
      (customer) => customer.subscription === subscription
    );
  }
}

const customer1 = new Customer(1, "Bob", Subscription.PREMIUM);
const customer2 = new Customer(2, "Jane", Subscription.STANDARD);
const customer3 = new Customer(3, "Fred", Subscription.FREE);
const customer4 = new Customer(4, "Sarah", Subscription.PREMIUM);
const allCustomers: Customer[] = [customer1, customer2, customer3, customer4];
const processor = new CustomersManager(allCustomers);

console.log("Customer 1 price: ", customer1.subscription);
processor.processCustomer(customer1);
console.log(
  "Premium customers: ",
  processor.getCustomersByType(Subscription.PREMIUM)
);
