# ABST Template Project

Welcome to the **ABST Template Project**, a robust and scalable starting point for building web applications using the ABST stack:

- **[Actix](https://actix.rs/)**: A powerful, pragmatic, and extremely fast web framework for Rust.
- **[Bun](https://bun.sh/)**: A fast, all-in-one JavaScript runtime.
- **[SolidJS](https://www.solidjs.com/)**: A declarative JavaScript library for building efficient and reactive user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## Features

- **Actix**: Handles backend server logic, managing requests and responses efficiently.
- **Bun**: Provides a fast JavaScript runtime for executing server-side logic.
- **SolidJS**: Enables reactive and dynamic UI development for a seamless user experience.
- **Tailwind CSS**: Allows for rapid creation of modern, responsive designs using utility-first principles.

## Prerequisites

To get started, ensure the following are installed on your machine:

- **Node.js**: Required for client-side development. Download from [nodejs.org](https://nodejs.org/).
- **Rust**: Required for backend development with Actix. Download from [rust-lang.org](https://www.rust-lang.org/).
- **Bun**: The JavaScript runtime needed for server-side development. Download from [bun.sh](https://bun.sh/).

## Getting Started

### Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/SEM-Development/Solidjs-Template
cd Solidjs-Template
```

### Install Dependencies

#### Client

Navigate to the `client` directory and install the dependencies:

```sh
cd client
bun install
```

#### Server

Navigate to the `server` directory and build the server:

```sh
cd ../server
cargo run
```

### Start the Client

In the `client` directory, start the SolidJS development server:

```sh
bun run dev
```

The client will start on [http://localhost:3000](http://localhost:3000).
