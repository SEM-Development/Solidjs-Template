# ABST Template Project

This project is a template for building web applications using the ABST stack:

- **Actix**: A powerful, pragmatic, and extremely fast web framework for Rust.
- **Bun**: A fast all-in-one JavaScript runtime.
- **SolidJS**: A declarative JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Features

- **Actix**: Backend server handling requests and responses.
- **Bun**: Fast JavaScript runtime for server-side logic.
- **SolidJS**: Frontend framework for building reactive user interfaces.
- **Tailwind CSS**: Styling framework for creating modern and responsive designs.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Rust**: Ensure you have Rust installed. You can download it from [rust-lang.org](https://www.rust-lang.org/).
- **Bun**: Ensure you have Bun installed. You can download it from [bun.sh](https://bun.sh/).

## Getting Started

### Clone the Repository

```sh
git clonehttps://github.com/HollowNumber/Solidjs-Template
cd Solidjs-Template
```

## Install Dependencies

### Client

Navigate to the `client` directory and install the dependencies:

```sh
cd client
bun install
```

### Sever

Navigate to the `server` directory and install the dependencies
```sh
cd ../sever
cargo build
```

### Start the Client
In the `client` directory, run the following command to start the SolidJS development server:

```sh
bun run dev
```

The client will start on `http://localhost:3000`

