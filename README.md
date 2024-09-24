# Frontend Engineer Coding Challenge

This project involves building a **mini-invoicing dashboard** where users can view and manage invoices. The design should be simple, clean, and aligned with the branding of Attelas.ai (you can take inspiration from the design at [Attelas.ai](https://attelas.ai)).

## Task Overview

Your task is to create a simple and clean invoicing dashboard using **React** and **TypeScript** that allows users to:
- View a list of invoices
- See detailed information about each invoice
- Chase overdue invoices with a pre-generated email reminder

## Requirements

### 1. Invoices List Page
- Display a list of invoices.
- Each invoice should show:
  - **Invoice Number**
  - **Client Name**
  - **Total Amount Due**
  - **Due Date**
  - **Status** (Paid, Pending, Overdue)
- Clicking on an invoice should navigate to the **Invoice Details Page**.

#### Data Source:
- **Invoices Data**: [invoices-attelas.json](https://attelasstorageoutlookdev.blob.core.windows.net/codetest/invoices-attelas.json)
- **Clients Data**: [clients-attelas.json](https://attelasstorageoutlookdev.blob.core.windows.net/codetest/clients-attelas.json)

### 2. Invoice Details Page
- Display full details of the selected invoice.
- Include a "Chase" button that opens a dialog (see Chase feature below).

### 3. Chase Feature
- Clicking the "Chase" button should generate a fake **email preview** that includes:
  - **Client Name**
  - **Invoice Number** and **Amount Due**
  - **Due Date**
  - A polite message reminding the client to pay
- The email preview should be shown in a dialog but does not need to actually send.

## Technical Requirements

- Use **React** with **TypeScript**.
- Ensure the app is **responsive** and works well on both desktop and mobile devices.
- You are free to use a UI component library like **Material UI** or **Bootstrap**.
- Code quality should be production-ready while keeping the solution **simple and clean**.

## Things We value

- Clean and maintainable code
- Good attention to **UI/UX**
- Tests

## Submission 
Please submit a link to a GitHub repository with your solution, including a brief README.md file on how to run the project. 
