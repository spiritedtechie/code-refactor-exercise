class Customer:

    def __init__(self, id, n, t):
        self.id = id
        self.n = n
        self.t = t

    def __repr__(self):
        return str(self.id)


class Processor:

    def _get(self, c_list, type):
        r = []
        for i in range(len(c_list)):
            if c_list[i].t == type:
                r.append(c_list[i])
        return r

    def is_paying(self, c):
        if c.t == "standard" or c.t == "premium" or c.t == "enterpise":
            return True
        else:
            return False

    def price(self, c):
        if c.t == "standard":
            return 10.00
        elif c.t == "free":
            return 0
        elif c.t == "premium":
            return 25
        elif c.t == "enterpise":
            return 100

    def process(self, c):
        if self.is_paying(c) == True:
            self.process_premium(c)
        else:
            self.process_freemium(c)

    def process_premium(self, c):
            # Do some service logic here
            print("Paying customer processed")

    def process_freemium(self, c):
        # Do some service logic here
        print("Freemium customer processed")


p = Processor()

c1 = Customer(1, "Bob", "premium")
c2 = Customer(2, "Jane", "standard")
c3 = Customer(3, "Fred", "freemium")
c4 = Customer(4, "Sarah", "premium")
all = [c1, c2, c3, c4]

print("Customer 1 price: " + str(p.price(c1)))
p.process(c1)
print("Premium customers: ", p._get(all, "premium"))