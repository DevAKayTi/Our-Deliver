import { Routes } from "@/config/routes";

export const siteSettings = {
    sidebarLinks: {
        admin: [
          {
            href: Routes.dashboard,
            label: 'Dashboard',
            icon: 'DashboardIcon',
          },
          {
            href: Routes.shop.list,
            label: 'sidebar-nav-item-shops',
            icon: 'ShopIcon',
          },
          {
            href: Routes.adminMyShops,
            label: 'sidebar-nav-item-my-shops',
            icon: 'MyShopIcon',
          },
          {
            href: Routes.product.list,
            label: 'sidebar-nav-item-products',
            icon: 'ProductsIcon',
          },
          {
            href: Routes.type.list,
            label: 'sidebar-nav-item-groups',
            icon: 'TypesIcon',
          },
          {
            href: Routes.category.list,
            label: 'sidebar-nav-item-categories',
            icon: 'CategoriesIcon',
          },
          {
            href: Routes.tag.list,
            label: 'sidebar-nav-item-tags',
            icon: 'TagIcon',
          },
          {
            href: Routes.order.list,
            label: 'sidebar-nav-item-orders',
            icon: 'OrdersIcon',
          },
          // {
          //   href: Routes.order.create,
          //   label: 'sidebar-nav-item-create-order',
          //   icon: 'CalendarScheduleIcon',
          // },
          {
            href: Routes.user.list,
            label: 'sidebar-nav-item-users',
            icon: 'UsersIcon',
          },
          {
            href: Routes.tax.list,
            label: 'sidebar-nav-item-taxes',
            icon: 'TaxesIcon',
          },
          {
            href: Routes.withdraw.list,
            label: 'sidebar-nav-item-withdraws',
            icon: 'WithdrawIcon',
          },
          {
            href: Routes.question.list,
            label: 'sidebar-nav-item-questions',
            icon: 'QuestionIcon',
          },
          {
            href: Routes.reviews.list,
            label: 'sidebar-nav-item-reviews',
            icon: 'ReviewIcon',
          },
          {
            href: Routes.settings,
            label: 'sidebar-nav-item-settings',
            icon: 'SettingsIcon',
          },
        ],
        
    }    
}