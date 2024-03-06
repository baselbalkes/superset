/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { styled } from '@superset-ui/core';
import { Menu as AntdMenu } from 'antd';
import { MenuProps as AntdMenuProps } from 'antd/lib/menu';

export type MenuProps = AntdMenuProps;

const MenuItem = styled(AntdMenu.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({ theme }) => theme.gridUnit * 8}px;
    line-height: ${({ theme }) => theme.gridUnit * 8}px;
    a {
      border-bottom: none;
      transition: background-color ${({ theme }) => theme.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({ theme }) => theme.transitionTiming}s;
        
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
         
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
     
    }
    transition-duration: 0s;
  }
`;

const StyledNav = styled(AntdMenu)`
  line-height: 51px;
  border: none;
  .ant-menu-inline{
   background-color:transparent;
  }
  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.grayscale.base};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({ theme }) => theme.gridUnit * 4}px;
  }
`;

const StyledSubMenu = styled(AntdMenu.SubMenu)`
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
   
    .ant-menu-submenu-title {
      color: ${({ theme }) => theme.colors.primaryColor.light3};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
 
  .ant-menu-submenu-title {
    position: relative;
 
    font-size:${({theme})=>theme.typography.sizes.m}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({ theme }) => theme.transitionTiming}s;
&:hover{
  color:red;
}
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
      ${({ theme }) => theme.gridUnit * 3}px !important;
    span[role='img'] {
      position: relative;
     
      svg {
        width:24px;
        height:18px;
        color: ${({ theme }) => theme.colors.primaryColor.light3};
        &:hover{
          color:white;
        }
      }
    }
    & > span {
      position: relative;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor.base};
    }
 
      
   
  }
`;

export declare type MenuMode =
  | 'vertical'
  | 'vertical-left'
  | 'vertical-right'
  | 'horizontal'
  | 'inline';

export const Menu = Object.assign(AntdMenu, {
  Item: MenuItem,
});

export const MainNav = Object.assign(StyledNav, {
  Item: MenuItem,
  SubMenu: StyledSubMenu,
  Divider: AntdMenu.Divider,
  ItemGroup: AntdMenu.ItemGroup,
});
