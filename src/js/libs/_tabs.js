import GraphTabs from 'graph-tabs';
if (document.querySelector('[data-tabs="recommended-products"]')) {
    const tabs = new GraphTabs('recommended-products');
}

if (document.querySelector('[data-tabs="contacts"]')) {
    const tabs = new GraphTabs('contacts');
}

if (document.querySelector('[data-tabs="production-technologies"]')) {
    const tabs = new GraphTabs('production-technologies');
}