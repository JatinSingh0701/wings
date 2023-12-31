const express = require('express');
const router = express.Router();

// Define routes
const routes = [
  { path: '/', template: 'index', title: 'Home' },
  { path: '/about', template: 'about', title: 'About' },
  { path: '/project', template: 'project', title: 'Project' },
  { path: '/services', template: 'services', title: 'Services' },
  { path: '/thoughts', template: 'thoughts', title: 'Thoughts' },
  { path: '/contact', template: 'contact', title: 'Contact us' },
  { path: '/terms', template: 'terms', title: 'Terms & Conditions' },
  { path: '/privacy', template: 'privacy', title: 'Privacy Policy' },
];

// Generate routes dynamically
routes.forEach(route => {
  router.get(route.path, (req, res) => {
    res.render(route.template, { title: route.title });
  });
});

module.exports = router;
