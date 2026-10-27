const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
  });
}));
const projects = [
  { title: 'Mộc Studio', description: 'Ý tưởng website cho một studio nội thất: dùng khoảng trắng, tông màu tự nhiên và chữ dễ đọc để giới thiệu tinh thần thương hiệu. Hình xem trước là minh họa giao diện, chưa phải sản phẩm đã triển khai.', tags: ['Website', 'Thiết kế giao diện', 'HTML / CSS'] },
  { title: 'Daily Focus', description: 'Ý tưởng ứng dụng giúp sắp xếp việc cần làm và chia thời gian tập trung theo từng phiên. Hình xem trước minh họa màn hình di động; portfolio này không tích hợp bộ đếm thời gian.', tags: ['Ứng dụng', 'Quản lý thời gian', 'Ý tưởng sản phẩm'] },
  { title: 'The Learning Log', description: 'Ý tưởng blog cá nhân để lưu lại những kiến thức mới, ghi chép quá trình thực hành và chia sẻ bài học. Đây là ví dụ trình bày dự án để bạn thay bằng bài viết và sản phẩm của mình.', tags: ['Website', 'Blog cá nhân', 'Chia sẻ kiến thức'] }
];
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[Number(button.dataset.project)];
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(tag => {
    const element = document.createElement('span');
    element.textContent = tag;
    return element;
  }));
  dialog.showModal();
}));
document.querySelectorAll('.close-dialog, .close-action').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
