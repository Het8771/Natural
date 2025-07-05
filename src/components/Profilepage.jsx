import React, { useState } from "react";
import {
  FiUser,
  FiPackage,
  FiMapPin,
  FiLogOut,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      location: "Mumbai, Maharashtra 400001",
      phone: "+91 98765 43210",
      default: true,
    },
    {
      id: 2,
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      location: "Mumbai, Maharashtra 400001",
      phone: "+91 98765 43210",
      default: false,
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    dob: "1990-01-01",
  });

  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/women/44.jpg"
  );

  const orders = [
    {
      id: "ORD123456",
      date: "May 15, 2024",
      status: "Delivered",
      item: {
        name: "Dimond Gold",
        qty: 2,
        price: 160,
        image:
          "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg",
      },
      shipping: {
        address: "123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001",
        phone: "+91 98765 43210",
      },
      tracking: Array(7).fill({
        location: "Delivered Mumbai, Maharashtra",
        description: "Package delivered to recipient",
        timestamp: "May 17, 2024, 2:45 PM",
      }),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({ ...addr, default: addr.id === id }))
    );
  };

  const handleAddAddress = () => {
    const newAddress = {
      id: Date.now(),
      name: "John Doe",
      address: "New Address Line",
      location: "Mumbai, Maharashtra 400001",
      phone: "+91 98765 43210",
      default: false,
    };
    setAddresses([...addresses, newAddress]);
  };
  

  const [showModal, setShowModal] = useState(false);

  const handleAddAddress1 = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="min-h-screen bg-white p-4 md:p-6 flex flex-col md:flex-row gap-4">
      {/* Sidebar */}
      <div className="w-full md:max-w-xs bg-white rounded-lg shadow p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={profileImage}
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-lg">John Doe</h2>
              <p className="text-sm text-gray-500">{formData.email}</p>
            </div>
          </div>

          <div className="space-y-2">
            {["Profile", "Orders", "Address"].map((tab) => {
              const iconMap = {
                Profile: <FiUser />,
                Orders: <FiPackage />,
                Address: <FiMapPin />,
              };
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedOrder(null);
                    setActiveTab(tab);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-md ${
                    activeTab === tab
                      ? "bg-teal-700 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {iconMap[tab]} {tab}
                </button>
              );
            })}
          </div>
        </div>

        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 text-sm mt-4 justify-center">
          <FiLogOut /> Log out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        {activeTab === "Profile" && (
          <>
            <div className="flex flex-col items-center relative mb-6 ml-10">
              <img
                src={profileImage}
                className="w-20 h-20 rounded-full object-cover"
                alt="Profile"
              />
              <label
                htmlFor="upload-photo"
                className="absolute top-[75px] right-[calc(50%-10px)] bg-white p-1 border rounded-full cursor-pointer"
              >
                <FiEdit2 className="text-sm" />
              </label>
              <input
                type="file"
                id="upload-photo"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-md text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full mt-1 p-2 border rounded-md text-sm bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded-md text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded-md text-sm"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-2 rounded-full hover:bg-teal-800 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </>
        )}

        {activeTab === "Orders" && !selectedOrder && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Orders</h2>
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm bg-white cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="bg-teal-700 text-white flex justify-between items-center px-4 py-2 text-sm">
                    <div>
                      <div>Order #{order.id}</div>
                      <div className="text-xs text-gray-200">
                        Placed on {order.date}
                      </div>
                    </div>
                    <div className="text-green-300">{order.status}</div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={order.item.image}
                        alt={order.item.name}
                        className="w-16 h-16 rounded object-cover border"
                      />
                      <div>
                        <div className="font-medium">{order.item.name}</div>
                        <div className="text-sm text-gray-500">
                          QTY {order.item.qty}
                        </div>
                      </div>
                    </div>
                    <div className="text-right font-semibold">
                      ₹{order.item.price}.00
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOrder && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-teal-700 text-white p-3 rounded-t font-medium">
                Order Tracking
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Tracking History</h2>
                <div className="relative ml-4 border-l-2 border-gray-300">
                  {selectedOrder.tracking.map((track, index) => (
                    <div key={index} className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-teal-700 rounded-full -left-[7px] top-[6px]"></div>
                      <h3 className="font-semibold">{track.location}</h3>
                      <p className="text-sm text-gray-500">{track.description}</p>
                      <span className="text-xs text-gray-400">{track.timestamp}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleBackToOrders}
                  className="mt-4 text-sm text-teal-600 underline"
                >
                  ← Back to Orders
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-teal-700 text-white p-3 rounded-t font-medium">
                Order Summary
              </div>
              <div className="bg-white p-4 border border-gray-300 rounded">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₹120.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>₹20.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax</span>
                  <span>₹20.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2 font-semibold">
                  <span>Total</span>
                  <span>₹160.00</span>
                </div>
              </div>

              <div className="bg-teal-700 text-white p-3 rounded-t font-medium">
                Shipping Address
              </div>
              <div className="bg-white p-4 border border-gray-300 rounded text-sm">
                <p className="font-semibold">John Doe</p>
                <p>{selectedOrder.shipping.address}</p>
                <p>Phone: {selectedOrder.shipping.phone}</p>
              </div>

              <div className="bg-teal-700 text-white p-3 rounded-t font-medium">
                Order Items
              </div>
              <div className="bg-white p-4 border border-gray-300 rounded space-y-2">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img
                      src={selectedOrder.item.image}
                      className="w-12 h-12 object-cover rounded border border-gray-300"
                      alt="item"
                    />
                    <div className="text-sm">
                      {selectedOrder.item.name}
                      <div>₹{selectedOrder.item.price}.00</div>
                    </div>
                  </div>
                ))}
                <div className="text-right pt-2">
                  Total ₹160.00
                </div>
              </div>
            </div>
          </div>
        )}

{activeTab === "Address" && !selectedOrder && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Addresses</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="border rounded p-4 relative hover:shadow"
                >
                  <h3 className="font-semibold">{addr.name}</h3>
                  {addr.default && (
                    <span className="absolute top-2 right-3 text-xs text-green-600 font-medium">
                      Default
                    </span>
                  )}
                  <p className="text-sm">{addr.address}</p>
                  <p className="text-sm">{addr.location}</p>
                  <p className="text-sm">Phone: {addr.phone}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <button
                      className="hover:text-teal-700"
                      onClick={() => handleSetDefault(addr.id)}
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      className="hover:text-red-600"
                      onClick={() => handleDeleteAddress(addr.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Address Button */}
            <button
              onClick={handleAddAddress1}
              className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-800"
            >
              Add New Address
            </button>

            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
                  <h2 className="text-xl font-semibold mb-2">Add New Address</h2>
                  <p className="text-gray-600 mb-6">
                    Enter your address details below. This will be used for shipping your orders.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="border p-2 rounded" />
                    <input type="text" placeholder="Last Name" className="border p-2 rounded" />
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="border p-2 rounded md:col-span-2"
                    />
                    <input type="text" placeholder="City" className="border p-2 rounded" />
                    <input type="text" placeholder="State" className="border p-2 rounded" />
                    <input type="text" placeholder="ZIP Code" className="border p-2 rounded" />
                    <input type="text" placeholder="Phone Number" className="border p-2 rounded" />
                  </div>
                  <div className="flex justify-end mt-6 gap-4">
                    <button
                      onClick={handleCloseModal}
                      className="border border-gray-400 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-800">
                      Save Address
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

