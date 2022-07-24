import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';

const Page = forwardRef(({ children, title, ...other }, ref) => (
  <div ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={title} />
    </Helmet>
    {children}
  </div>
));

export default Page;
