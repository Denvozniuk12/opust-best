export interface IMenuItem {
    id: number;
    type: string;
    href?: string;
    itemName: string;
    index?: number;
    dataMenuId: number;
    subMenuItems?: ISubMenuItem[];
}
export interface ISubMenuItem {
    id: number;
    type: string;
    href?: string;
    itemName: string;
    index?: number;
    dataMenuId: number;
    subMenuItemSubMenuItems?: ISubMenuItemSubMenuItem[];
}
export interface ISubMenuItemSubMenuItem {
    id: number;
    type: string;
    href: string;
    itemName: string;
    dataMenuId: number;
}

export const MenuData: IMenuItem[] = [
    {
        id: 1,
        type: 'sub-menu',
        itemName: 'Categories',
        index: 0,
        dataMenuId: 1,
        subMenuItems: [
            {
                id: 1,
                type: 'sub-menu-item-sub-menu',
                index: 0,
                itemName: 'Art',
                dataMenuId: 12,
                subMenuItemSubMenuItems: [
                    {
                        id: 1,
                        type: 'sub-menu-item-sub-menu-item',
                        href: '/',
                        itemName: 'Design',
                        dataMenuId: 23,
                    }
                ],
            },
            {
                id: 2,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 13,
                itemName: 'Auto Help',
            },
            {
                id: 3,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 14,
                itemName: 'Biographies',
            },
            {
                id: 4,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 15,
                itemName: 'Comics',
            },
            {
                id: 5,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 16,
                itemName: 'Economy',
            },
            {
                id: 6,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 17,
                itemName: 'Essay',
            },
            {
                id: 7,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 18,
                itemName: 'Investigation',
            },
            {
                id: 8,
                type: 'sub-menu-item-sub-menu',
                index: 1,
                itemName: 'Narrative',
                dataMenuId: 19,
                subMenuItemSubMenuItems: [
                    {
                        id: 1,
                        type: 'sub-menu-item-sub-menu-item',
                        href: '/',
                        itemName: 'Novel',
                        dataMenuId: 24,
                    },
                    {
                        id: 2,
                        type: 'sub-menu-item-sub-menu-item',
                        href: '/',
                        itemName: 'Poetry',
                        dataMenuId: 25,
                    },
                    {
                        id: 3,
                        type: 'sub-menu-item-sub-menu-item',
                        href: '/',
                        itemName: 'Stories',
                        dataMenuId: 26,
                    },
                    {
                        id: 4,
                        type: 'sub-menu-item-sub-menu-item',
                        href: '/',
                        itemName: 'Theatry',
                        dataMenuId: 27,
                    },
                ],
            },
            {
                id: 9,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 20,
                itemName: 'Psyhology',
            },
            {
                id: 10,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 21,
                itemName: 'Philosophy',
            },
            {
                id: 11,
                type: 'sub-menu-item',
                href: '/',
                dataMenuId: 22,
                itemName: 'Sociology',
            },
        ],
    },
    {
        id: 2,
        type: 'menu-item',
        href: '/',
        itemName: 'Shop',
        dataMenuId: 2,
    },
    {
        id: 3,
        type: 'menu-item',
        href: '/blog',
        itemName: 'Blog',
        dataMenuId: 3,
    },
    {
        id: 4,
        type: 'menu-item',
        href: '/',
        itemName: 'Cart',
        dataMenuId: 4,
    },
    {
        id: 5,
        type: 'menu-item',
        href: '/',
        itemName: 'Checkout',
        dataMenuId: 5,
    },
    {
        id: 6,
        type: 'menu-item',
        href: '/',
        itemName: 'All Book Categories',
        dataMenuId: 6,
    },
    {
        id: 7,
        type: 'menu-item',
        href: '/',
        itemName: 'All Book Authors',
        dataMenuId: 7,
    },
    {
        id: 8,
        type: 'menu-item',
        href: '/',
        itemName: 'Contact',
        dataMenuId: 8,
    },
    {
        id: 9,
        type: 'menu-item',
        href: '/',
        itemName: 'Sample Page',
        dataMenuId: 9,
    },
    {
        id: 10,
        type: 'menu-item',
        href: '/',
        itemName: 'Privacy Policy',
        dataMenuId: 10,
    },
    {
        id: 11,
        type: 'menu-item',
        href: '/',
        itemName: '404',
        dataMenuId: 11,
    },
];