import { Routes } from '@angular/router';
import {authGuard} from '../guards/auth-guard';
import {guestGuard} from '../guards/guest-guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      { path: 'login', loadComponent: () => import('../../features/auth/signin/signin').then(m => m.Signin) },
      { path: 'register', loadComponent: () => import('../../features/auth/signup/signup').then(m => m.Signup) },
      { path: 'forgot-password', loadComponent: () => import('../../features/auth/forgot-password/forgot-password').then(m => m.ForgotPassword) },
      { path: 'check-email', loadComponent: () => import('../../features/auth/check-email/check-email').then(m => m.CheckEmail) },
      { path: 'verification-code', loadComponent: () => import('../../features/auth/verification-code/verification-code').then(m => m.VerificationCode) },
      { path: 'create-new-password', loadComponent: () => import('../../features/auth/create-new-password/create-new-password').then(m => m.CreateNewPassword) },
    ]
  },

  {
    path: 'dashboard',
    data: { breadcrumb: 'Dashboard' },
    canActivate: [authGuard],
    children: [
      {
        path: 'analytics',
        data: { breadcrumb: 'Analytics' },
        loadComponent: () => import("../../features/analytics/analytics").then(m => m.Analytics)
      }
    ]
  },

  {
    path: 'users',
    data: { breadcrumb: 'Users' },
    canActivate: [authGuard],
    children: [
      {
        data: { breadcrumb: 'List' },
        path: 'list',
        loadComponent: () =>
          import("../../features/User/users/users").then((mod) => mod.Users)
      },
      {
        data: { breadcrumb: 'Add User' },
        path: 'add-user',
        loadComponent: () =>
          import("../../features/User/add-user/add-user").then((mod) => mod.AddUser)
      },
      {
        data: { breadcrumb: 'Profile' },
        path: 'profile',
        loadComponent: () =>
          import("../../features/User/profile/profile").then((mod) => mod.Profile)
      },
    ]
  },

  {
    path: 'ecommerce',
    data: { breadcrumb: 'Ecommerce' },
    canActivate: [authGuard],
    children: [
      {
        data: { breadcrumb: 'Products' },
        path: 'products',
        loadComponent: () =>
          import("../../features/Product/products/products").then((mod) => mod.Products)
      },
      {
        data: { breadcrumb: 'Add Product' },
        path: 'add-product',
        loadComponent: () =>
          import("../../features/Product/add-product/add-product").then((mod) => mod.AddProduct)
      },
      {
        data: { breadcrumb: 'Categories' },
        path: 'categories',
        loadComponent: () =>
          import("../../features/Categories/category/category").then((mod) => mod.Category)
      },
      {
        data: { breadcrumb: 'Add Category' },
        path: 'add-category',
        loadComponent: () =>
          import("../../features/Categories/add-category/add-category").then((mod) => mod.AddCategory)
      },
      {
        data: { breadcrumb: 'Brands' },
        path: 'brands',
        loadComponent: () =>
          import("../../features/Brand/brands/brands").then((mod) => mod.Brands)
      },
      {
        data: { breadcrumb: 'Add Brand' },
        path: 'add-brand',
        loadComponent: () =>
          import("../../features/Brand/add-brand/add-brand").then((mod) => mod.AddBrand)
      },
      {
        data: { breadcrumb: 'Tags' },
        path: 'tags',
        loadComponent: () =>
          import("../../features/Tag/tags/tags").then((mod) => mod.Tags)
      },
      {
        data: { breadcrumb: 'Add Tag' },
        path: 'add-tag',
        loadComponent: () =>
          import("../../features/Tag/add-tag/add-tag").then((mod) => mod.AddTag)
      },
      {
        data: { breadcrumb: 'Badges' },
        path: 'badges',
        loadComponent: () =>
          import("../../features/Badge/badges/badges").then((mod) => mod.Badges)
      },
      {
        data: { breadcrumb: 'Add Badge' },
        path: 'add-badge',
        loadComponent: () =>
          import("../../features/Badge/add-badge/add-badge").then((mod) => mod.AddBadge)
      },
      {
        data: { breadcrumb: 'Reviews' },
        path: 'reviews',
        loadComponent: () =>
          import("../../features/reviews/reviews").then((mod) => mod.Reviews)
      },
    ]
  },
];
