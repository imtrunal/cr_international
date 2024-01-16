import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

// Assets in public directory cannot be imported from JavaScript.
// If you intend to import that asset, put the file in the src directory, and use /src/assets/logo.svg instead of /public/assets/logo.svg.
// If you intend to use the URL of that asset, use /assets/logo.svg?url.

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            title: "Home",
            url: '/'
        },
        {
            title: "Product",
            url: '/products'
        },
        {
            title: "Catalogue",
            url: '/catalogue'
        },
        {
            title: "About us",
            url: '/about'
        },
        {
            title: "Contact",
            url: '/contact'
        },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link to={`/`}>
                    <NavbarBrand className='w-10 h-full py-2'>
                        <img src="/assets/cr_logo.png" alt="Cora'l" className='h-full' />
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        {/* <Link href={`/products/${item.url}`} color='foreground'>{item.title}</Link> */}
                        <Link to={item.url}>{item.title}</Link>
                    </NavbarItem>
                ))}
                {/* <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<Icon icon="akar-icons:search" fontSize={24} />}
                    type="search"
                />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full" to={item.url}>{item.title}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Header