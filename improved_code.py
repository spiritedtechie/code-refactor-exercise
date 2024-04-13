from typing import List
from enum import Enum


class SubscriptionType(Enum):
    STANDARD = 10.00
    FREE = 0
    PREMIUM = 25
    ENTERPRISE = 100


class Customer:

    def __init__(self, id: int, name: str, subscription_type: SubscriptionType):
        self.id = id
        self.name = name
        self.subscription_type = subscription_type

    def is_paying(self) -> bool:
        return self.subscription_type.value > 0

    def __repr__(self) -> str:
        return str(self.id)


class CustomerManager:
    def __init__(self, customers: List[Customer]):
        self.customers = customers

    def process(self, customer: Customer) -> None:
        if customer.is_paying():
            self._process_premium(customer)
        else:
            self._process_freemium(customer)

    def _process_premium(self, customer: Customer) -> None:
        print("Paying customer processed")

    def _process_freemium(self, customer: Customer) -> None:
        print("Freemium customer processed")

    def filter_by_type(
        self, subscription_type: SubscriptionType
    ) -> List[Customer]:
        # Is this efficient? When and how could it be improved?
        return [
            customer
            for customer in self.customers
            if customer.subscription_type == subscription_type
        ]


c1 = Customer(1, "Bob", SubscriptionType.PREMIUM)
c2 = Customer(2, "Jane", SubscriptionType.STANDARD)
c3 = Customer(3, "Fred", SubscriptionType.FREE)
c4 = Customer(4, "Sarah", SubscriptionType.PREMIUM)
all_customers = [c1, c2, c3, c4]

customer_manager = CustomerManager(all_customers)

print("Customer 1 price: ", c1.subscription_type.value)
customer_manager.process(c1)
print(
    "Premium customers: ",
    customer_manager.filter_by_type(SubscriptionType.PREMIUM),
)
