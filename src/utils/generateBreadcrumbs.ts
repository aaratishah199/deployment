export const generateBreadcrumbsData = (pathname: string) => {
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')

  return pathSegments.map((segment, index) => ({
    title: segment,
    href: `/${pathSegments.slice(0, index + 1).join('/')}`,
  }))
}
