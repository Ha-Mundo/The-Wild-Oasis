# 👋Introduction

The Wild Oasis is a beautiful internal hotel management application system. This application is designed to manage hotel operations, including sales statistics, cabin management, user management, booking management, and various customization options. And so much more!

## 🌟App Requirements

1. Authentication and Authorization

   - Users of the app are hotel employees.
   - New users can only be signed up inside the applications (to guarantee that
     only actual hotel employees can get accounts).
   - Users able to upload an avatar, and change their name and password

2. Cabins

   - The app has a table view with all cabins, showing the cabin photo, name,
     capacity, price, and current discount.
   - Users can update or delete a cabin and create new cabins (including
     uploading a photo)

3. Bookings

   - The app has a table view with all bookings, showing arrival and departure
     dates, status, and paid amount, as well as cabin and guest data.
   - The booking status can be "unconfirmed" (booked but not yet checked in),
     "checked in", or "checked out". The table is filterable by this important
     status.
   - Other booking data includes the number of guests, number of nights, guest
     observations, and whether they booked breakfast and breakfast price.

4. Check-In/Out

   - Users can delete, check-in, or check out a booking as the guest arrives
     (no editing necessary for now).
   - Bookings may not have been paid yet on guest arrival. Therefore, on
     check-in, users need to accept payment (outside the app), and then confirm
     that payment has been received (inside the app).
   - On check-in, the guest should have the ability to add breakfast for the
     entire stay if they haven’t already.

5. Guests

   - Guest data contain full name, email, national ID, nationality, and a
     country flag for easy identification.

6. Dashboard

   - The initial app screen should be a dashboard, to display important
     information for the last 7, 30, or 90 days:
     - A list of guests checking in and out on the current day. Users should
       be able to perform these tasks from here.
     - Statistics on recent bookings, sales, check-ins, and occupancy rate.
     - A chart showing all daily hotel sales, showing both "total" sales and
       "extras" sales (only breakfast at the moment).
     - A chart showing statistics on stay durations, as this is an important
       metric for the hotel

7. Settings

   - Users can define a few application-wide settings: breakfast price, minimum
     and maximum nights/booking, max guests/booking

8. Dark Mode

   - The app supports dark mode.

## 📋FEATURES + PAGES

| FEATURE CATEGORIES | NECESSARY PAGES                               | Path                           |
| :----------------- | :-------------------------------------------- | :----------------------------- |
| Dashboard          | Dashboard                                     | /dashboard                     |
| Bookings           | Bookings                                      | /bookings                      |
| Cabins             | Cabins                                        | /cabins                        |
| Guests             |                                               |                                |
| Check in and out   | Booking check in                              | /checkin/:bookingID            |
| App settings       | App settings                                  | /settings                      |
| Authentication     | User sign up <br> Login <br> Account settings | /users<br> /login<br> /account |

## 🛠️Technologies Used

- **Frontend**:

  - **[React]**: A very popular JavaScript library for building user
    interfaces.
  - **[React Router]**: The standard routing for React SPAs.
  - **[Styled Components]**: A very popular way of writing component-scoped
    CSS, right inside JavaScript.
  - **[React Query]**: The best way of managing remote state, with features
    like caching, automatic re-fetching, pre-fetching offline support, etc.
    Alternatives are SWR and RTK query, but this is the most popular.
  - **Context API**: One simple context with `useState` will be enough, No
    need Redux.
  - **[React Hook Form]**: A library can simplify handling bigger forms.
  - **Others**: [React Icons], [React hot toast], [Recharts], [date-fns]

- **Backend**:
  - Handle by **[Supabase]**: A service that allows developers to easily
    create a back-end with a Postgres database. It automatically creates a
    database and API so we can easily request and receive data from the
    server. Also comes with easy-to-use user authentication and file
    storage.

## 🏁Getting Started

To set up The Wild Oasis project locally, follow the instructions below.

## ⬇️Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ha-Mundo/Fast-Pizza-App.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## 🔧Usage

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Click on the localhost link that you get on the terminal or open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) to access The Wild Oasis application.

3. Sample User Logins

   ```
   email: test@example.com
   password: test1234
   ```

4. Run the app (production)

   ```bash
   npm run build
   ```

## 🚀Live Demo

### https://the-wild-oasis-beta-01.vercel.app/dashboard
