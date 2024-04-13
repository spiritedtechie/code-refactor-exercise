class Customer {
    id: any;
    n: any;
    t: any;

    constructor(id: number, n: any, t: any) {
        this.id = id;
        this.n = n;
        this.t = t;
    }
}

class Processor {
    get(cList: Customer[], type: string): Customer[] {
        const r: Customer[] = [];
        for (let i = 0; i < cList.length; i++) {
            if (cList[i].t === type) {
                r.push(cList[i]);
            }
        }
        return r;
    }

    is_paying(c: Customer): boolean {
        if (c.t == "standard" || c.t == "premium" || c.t == "enterpise") {
            return true
        } else {
            return false
        }
    }

    price(c: Customer): any {
        if (c.t === "standard") {
            return 10.00;
        } else if (c.t === "free") {
            return 0;
        } else if (c.t === "premium") {
            return 25;
        } else if (c.t === "enterpise") {
            return 100;
        }
    }

    process(c: Customer): void {
        if (this.is_paying(c)) {
            this.process_premium(c);
        } else {
            this.process_freemium(c);
        }
    }

    process_premium(c: Customer): void {
        // Do some service logic here
            console.log("Paying customer processed");
    }

    process_freemium(c: Customer): void {
        // Do some service logic here
        console.log("Freemium customer processed");
    }
}

let p = new Processor();

let c1 = new Customer(1, "Bob", "premium");
let c2 = new Customer(2, "Jane", "standard");
let c3 = new Customer(3, "Fred", "freemium");
let c4 = new Customer(4, "Sarah", "premium");
let all: any[] = [c1, c2, c3, c4];

console.log("Customer 1 price: " + p.price(c1));
p.process(c1);
console.log("Premium customers: ", p.get(all, "premium"));

