import { Component } from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    DashboardLayout,
    TableModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './users.html',
})
export class Users {
  users = [
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-1.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-2.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-3.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-4.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-5.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-6.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
    { Name: 'Julia Roberts', Email: 'julia.roberts@left4code.com', Image: '/bg-auth-7.jpg',
      Position: 'Product Manager', ProfileCompleteness: '50%', Status: 'Active',
      JoinedDate: 'October 7, 2013', Action: 'Action'
    },
  ];
}
