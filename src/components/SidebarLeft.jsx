import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiSun,
} from "react-icons/hi";
import { IoWater } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const SidebarLeft = () => {
 
 
    return (
    <Sidebar css={{ background: 'black'}} aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">
            <img
              src="./Button.png"
              alt="Dashboard"
              style={{ width: "20px", marginRight: "8px" }}
            />
            Dashboard
          </Sidebar.Item>

          <Sidebar.Collapse icon={HiSun} label="Energy">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse icon={IoWater} label="Water and Effulents">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item href="#" icon={HiSun}>
            Energy
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={RiDeleteBin6Line}>
            Waste
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarLeft;
