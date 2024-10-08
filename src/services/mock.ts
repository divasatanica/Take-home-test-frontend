export const invoiceList = [
  {
    invoiceNumber: "INV-1001",
    clientId: "C001",
    dueDate: "2023-09-30",
    status: "Pending",
    lineItems: [
      {
        description: "Web Design Services",
        quantity: 10,
        price: 300,
      },
      {
        description: "SEO Optimization",
        quantity: 5,
        price: 200,
      },
    ],
  },
  {
    invoiceNumber: "INV-1002",
    clientId: "C002",
    dueDate: "2023-09-25",
    status: "Paid",
    lineItems: [
      {
        description: "Consulting Services",
        quantity: 5,
        price: 500,
      },
    ],
  },
  {
    invoiceNumber: "INV-1003",
    clientId: "C002",
    dueDate: "2023-10-05",
    status: "Overdue",
    lineItems: [
      {
        description: "Marketing Campaign",
        quantity: 3,
        price: 500,
      },
    ],
  },
  {
    invoiceNumber: "INV-1004",
    clientId: "C002",
    dueDate: "2023-10-10",
    status: "Pending",
    lineItems: [
      {
        description: "Software Development",
        quantity: 20,
        price: 200,
      },
    ],
  },
  {
    invoiceNumber: "INV-1005",
    clientId: "C003",
    dueDate: "2023-09-20",
    status: "Paid",
    lineItems: [
      {
        description: "Product Design",
        quantity: 8,
        price: 400,
      },
    ],
  },
  {
    invoiceNumber: "INV-1006",
    clientId: "C003",
    dueDate: "2023-10-15",
    status: "Pending",
    lineItems: [
      {
        description: "Tech Consultation",
        quantity: 5,
        price: 550,
      },
    ],
  },
  {
    invoiceNumber: "INV-1007",
    clientId: "C004",
    dueDate: "2023-09-29",
    status: "Overdue",
    lineItems: [
      {
        description: "Business Analysis",
        quantity: 10,
        price: 430,
      },
    ],
  },
  {
    invoiceNumber: "INV-1008",
    clientId: "C005",
    dueDate: "2023-09-27",
    status: "Paid",
    lineItems: [
      {
        description: "Database Migration",
        quantity: 4,
        price: 475,
      },
    ],
  },
  {
    invoiceNumber: "INV-1009",
    clientId: "C005",
    dueDate: "2023-09-26",
    status: "Pending",
    lineItems: [
      {
        description: "AI Development",
        quantity: 30,
        price: 200,
      },
    ],
  },
  {
    invoiceNumber: "INV-1010",
    clientId: "C006",
    dueDate: "2023-10-01",
    status: "Overdue",
    lineItems: [
      {
        description: "Product Research",
        quantity: 11,
        price: 300,
      },
    ],
  },
  {
    invoiceNumber: "INV-1011",
    clientId: "C006",
    dueDate: "2023-09-21",
    status: "Paid",
    lineItems: [
      {
        description: "Energy Consulting",
        quantity: 5,
        price: 550,
      },
    ],
  },
  {
    invoiceNumber: "INV-1012",
    clientId: "C002",
    dueDate: "2023-09-30",
    status: "Pending",
    lineItems: [
      {
        description: "Time Machine Repair",
        quantity: 10,
        price: 415,
      },
    ],
  },
  {
    invoiceNumber: "INV-1013",
    clientId: "C003",
    dueDate: "2023-10-05",
    status: "Overdue",
    lineItems: [
      {
        description: "Marketing Campaign",
        quantity: 6,
        price: 500,
      },
    ],
  },
  {
    invoiceNumber: "INV-1014",
    clientId: "C004",
    dueDate: "2023-09-23",
    status: "Paid",
    lineItems: [
      {
        description: "Construction Services",
        quantity: 4,
        price: 550,
      },
    ],
  },
  {
    invoiceNumber: "INV-1015",
    clientId: "C005",
    dueDate: "2023-09-28",
    status: "Pending",
    lineItems: [
      {
        description: "Import/Export Consulting",
        quantity: 3,
        price: 550,
      },
    ],
  },
  {
    invoiceNumber: "INV-1016",
    clientId: "C006",
    dueDate: "2023-10-07",
    status: "Pending",
    lineItems: [
      {
        description: "Content Creation",
        quantity: 5,
        price: 500,
      },
    ],
  },
  {
    invoiceNumber: "INV-1017",
    clientId: "C007",
    dueDate: "2023-09-22",
    status: "Paid",
    lineItems: [
      {
        description: "E-commerce Setup",
        quantity: 8,
        price: 600,
      },
    ],
  },
  {
    invoiceNumber: "INV-1018",
    clientId: "C008",
    dueDate: "2023-10-02",
    status: "Overdue",
    lineItems: [
      {
        description: "Social Media Strategy",
        quantity: 4,
        price: 450,
      },
    ],
  },
  {
    invoiceNumber: "INV-1019",
    clientId: "C009",
    dueDate: "2023-09-24",
    status: "Paid",
    lineItems: [
      {
        description: "IT Infrastructure",
        quantity: 5,
        price: 750,
      },
    ],
  },
  {
    invoiceNumber: "INV-1020",
    clientId: "C001",
    dueDate: "2023-09-30",
    status: "Pending",
    lineItems: [
      {
        description: "Financial Consulting",
        quantity: 7,
        price: 435,
      },
    ],
  },
];

export type InvoiceItem = (typeof invoiceList)["0"];

export const clientList = [
  {
    clientId: "C001",
    name: "Acme Corp",
    email: "info@acmecorp.com",
    address: "123 Industrial Road, Springfield",
  },
  {
    clientId: "C002",
    name: "Globex Corporation",
    email: "contact@globex.com",
    address: "45 Elm Street, Capital City",
  },
  {
    clientId: "C003",
    name: "Soylent Corp",
    email: "hello@soylent.com",
    address: "67 Green Avenue, Metropolis",
  },
  {
    clientId: "C004",
    name: "Initech",
    email: "support@initech.com",
    address: "99 Startup Lane, Silicon Valley",
  },
  {
    clientId: "C005",
    name: "Umbrella Corporation",
    email: "admin@umbrella.com",
    address: "100 Biohazard Blvd, Racoon City",
  },
  {
    clientId: "C006",
    name: "Stark Industries",
    email: "tech@starkindustries.com",
    address: "200 Iron Avenue, Malibu",
  },
  {
    clientId: "C007",
    name: "Wayne Enterprises",
    email: "info@wayneenterprises.com",
    address: "1 Gotham Plaza, Gotham",
  },
  {
    clientId: "C008",
    name: "Tyrell Corporation",
    email: "replicants@tyrell.com",
    address: "700 Future Street, Los Angeles",
  },
  {
    clientId: "C009",
    name: "Cyberdyne Systems",
    email: "tech@cyberdyne.com",
    address: "550 AI Drive, San Francisco",
  },
];

export type ClientItem = (typeof clientList)["0"];
