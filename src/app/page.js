"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Calculate,
  AttachMoney,
  Savings,
  Menu,
  Close,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData } from "./store/features/counter";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const featuresRef = useRef(null); // Reference for the accordion section
  const router = useRouter(); // Router instance

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Function to handle scrolling to the features section
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const displath = useDispatch();
  const income = useSelector((state) => state.items);
  useEffect(() => {
    displath(GetAllData());
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 left-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              className="h-[50px] w-auto"
              src="/assets/images/h-man2.png"
              alt="img"
            />
            <h1 className="font-bold">MyBook</h1>
          </div>{" "}
          <nav className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li
                className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer"
                onClick={scrollToFeatures} // Smooth scroll on click
              >
                Features
              </li>
              <li
                className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer"
                onClick={() => router.push("/mybook")} // Redirect to /mybook
              >
                View MyBook
              </li>
              <li
                className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer"
                onClick={() => router.push("/auth/login")} // Redirect to /auth/login
              >
                Login
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleDrawer}>
              {isDrawerOpen ? (
                <Close className="text-indigo-600 text-3xl" />
              ) : (
                <Menu className="text-indigo-600 text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-[48px] left-0 w-full z-50">
            <ul className="flex flex-col items-center space-y-6 py-8">
              <li
                className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer"
                onClick={scrollToFeatures} // Smooth scroll on click
              >
                Features
              </li>
              <li
                className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer"
                onClick={() => router.push("/mybook")} // Redirect to /mybook
              >
                View MyBook
              </li>
              <li
                className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer"
                onClick={() => router.push("/auth/login")} // Redirect to /auth/login
              >
                Login
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-[100dvh] bg-no-repeat text-white py-20 grid place-content-center"
        style={{ backgroundImage: `url('/assets/images/bg.jpg')` }}
      >
        <div className="backdrop-blur-md rounded-md bg-opacity-70 py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl !text-blue-100 font-bold mb-4">
              Easily Track Your Income & Expenses
            </h2>
            <p className="text-xl !text-yellow-200 mb-8">
              Manage your finances effortlessly and gain control over <br />{" "}
              your budget.
            </p>
            <button
              onClick={() => router.push("/mybook")}
              className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Use Our Tracker?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <AttachMoney className="text-indigo-600 text-6xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Track Income</h4>
              <p>
                Keep track of all your sources of income with ease and organize
                them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Savings className="text-indigo-600 text-6xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Manage Expenses</h4>
              <p>
                Track and categorize all your expenses to stay on top of your
                spending.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Calculate className="text-indigo-600 text-6xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Budget Calculation</h4>
              <p>Automatically calculate and visualize your budget balance.</p>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold mb-4 text-center">
              Features Overview
            </h4>
            <div className="border bg-white p-6 rounded-lg shadow-lg">
              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(1)}
                >
                  <span className="font-semibold">Income Data Management</span>
                  <span>{openAccordionIndex === 1 ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openAccordionIndex === 1 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 border-t border-gray-200">
                    <p>
                      Easily add and manage your income data with our intuitive
                      interface. Users can input various sources of income,
                      categorize them, and track their performance over time.
                      Visualize your earnings through informative graphs and
                      charts that illustrate your financial growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(2)}
                >
                  <span className="font-semibold">Expense Tracking</span>
                  <span>{openAccordionIndex === 2 ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openAccordionIndex === 2 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 border-t border-gray-200">
                    <p>
                      Track your expenses effortlessly. Input your expenditures,
                      categorize them by type, and gain insights into your
                      spending habits. Our system allows for easy editing and
                      removal of entries, ensuring your financial records remain
                      accurate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(3)}
                >
                  <span className="font-semibold">Budget Overview</span>
                  <span>{openAccordionIndex === 3 ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openAccordionIndex === 3 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 border-t border-gray-200">
                    <p>
                      Get a comprehensive overview of your financial health with
                      the total value display. This feature aggregates your
                      income and expenses, providing a clear picture of your net
                      worth. Enjoy visual aids such as pie charts and bar graphs
                      that break down your financial data at a glance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(4)}
                >
                  <span className="font-semibold">Detailed Income Page</span>
                  <span>{openAccordionIndex === 4 ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openAccordionIndex === 4 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 border-t border-gray-200">
                    <p>
                      Dive deeper into your income with our dedicated single
                      income count page. This feature displays a detailed
                      breakdown of individual income sources, showcasing their
                      contribution to your overall earnings. With supporting
                      images and graphical representations, you can easily track
                      your income trends over time.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(5)}
                >
                  <span className="font-semibold">Data Saving Options</span>
                  <span>{openAccordionIndex === 5 ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openAccordionIndex === 5 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 border-t border-gray-200">
                    <p>
                      Users can save their financial data for various time
                      periods, including daily, every 15 days, monthly, and
                      yearly. This feature allows you to analyze your financial
                      performance over specific intervals and make informed
                      decisions based on trends observed in your spending and
                      income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 MyBook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
