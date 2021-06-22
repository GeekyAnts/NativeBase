import BreadcrumbMain from './Breadcrumb';
import BreadcrumbLink from './BreadcrumbLink';
import BreadcrumbItem from './BreadcrumbItem';
export type { IBreadcrumbProps, IBreadcrumbItemProps } from './types';
import type { IBreadcrumbComponentType } from './types';

let BreadcrumbTemp: any = BreadcrumbMain;
BreadcrumbTemp.Item = BreadcrumbItem;
BreadcrumbTemp.Link = BreadcrumbLink;

// To add typings
const Breadcrumb = BreadcrumbTemp as IBreadcrumbComponentType;
export { Breadcrumb };
