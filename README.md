# Decentralized Ride-Sharing Service

## Overview

This project is a decentralized ride-sharing service built with React for the frontend. It allows users to act as either riders or drivers, facilitating peer-to-peer ride arrangements without a centralized service provider.

## Features

- User role selection (Rider/Driver)
- Ride request submission
- Ride offer creation
- Viewing available rides
- Responsive design for mobile and desktop

## Tech Stack

- React
- React Router for navigation
- Tailwind CSS for styling
- Bun as the JavaScript runtime and package manager

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Bun](https://bun.sh/)
- You have a Windows/Linux/Mac machine

## Installing and Running the Project

To install and run this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/decentralized-ride-sharing.git
   ```

2. Navigate to the project directory:
   ```
   cd decentralized-ride-sharing
   ```

3. Install the dependencies:
   ```
   bun install
   ```

4. Start the development server:
   ```
   bun dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── RideForm.jsx
│   ├── RideList.jsx
│   └── RideItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── Rider.jsx
│   └── Driver.jsx
├── contexts/
│   └── AppContext.jsx
├── hooks/
│   └── useApi.js
├── api/
│   └── api.js
├── App.jsx
└── index.js
```

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contact

If you want to contact me you can reach me at `<your-email@example.com>`.
