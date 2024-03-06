
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function ComponentNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className='px-4' />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" className='border  rounded-full ' img="https://i.pinimg.com/564x/ec/0a/05/ec0a057351eff629b975b7f22a60654a.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className='text-xl'>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>About</Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>Services</Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>Pricing</Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
