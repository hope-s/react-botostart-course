import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Page = forwardRef(({ children, title, ...other }, ref) => (
  <div ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={title} />
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Page;
