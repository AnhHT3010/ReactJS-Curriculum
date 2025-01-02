const Stats = () => {
  const statsData = [
    {
      value: "20,000+",
      label: "TOTAL BOOKS",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvli7mmSyhU-GQq4_l2M6hZ3_utcbi3SPHZg&s", // Đường dẫn đến hình ảnh biểu tượng
    },
    {
      value: "1,000+",
      label: "AUTHORS",
      icon: "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=", // Đường dẫn đến hình ảnh biểu tượng
    },
    {
      value: "8,000+",
      label: "BOOKS SOLD",
      icon: "https://png.pngtree.com/png-clipart/20230418/original/pngtree-trolley-line-icon-png-image_9065418.png", // Đường dẫn đến hình ảnh biểu tượng
    },
    {
      value: "97%",
      label: "HAPPY CUSTOMER",
      icon: "https://png.pngtree.com/png-vector/20190401/ourlarge/pngtree-star-icon-design--essential-icon-vector-design-png-image_902954.jpg", // Đường dẫn đến hình ảnh biểu tượng
    },
  ];

  return (
    <div className="flex justify-center gap-8 bg-gray-100 py-10">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md w-[280px] flex items-center gap-4"
        >
          <img src={stat.icon} alt={stat.label} className="w-10 h-10" />{" "}
          {/* Hình ảnh biểu tượng */}
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
