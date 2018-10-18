function Container(id, className, tagName) {
    if (!['div', 'ul', 'li', 'a'].includes(tagName)) {
        // Ошибка
    }

    this.id = id;
    this.class = className;
    this.tagName = tagName;
}

Container.prototype.render = function () {
    var wrapper = document.createElement(this.tagName);
    wrapper.id = this.id;
    wrapper.className = this.class;

    return wrapper;
}

function Menu(id, className, items) {
    Container.call(this, id, className, 'ul');

    this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
    var ul = document.createElement('ul');

    this.items.forEach(function (item) {
        if (item instanceof Container) {
            ul.appendChild(item.render());
        }
    });

    return ul;
}

function MenuItem(className, title, href) {
    Container.call(this, null, className, 'li');

    this.title = title;
    this.href = href;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function () {
    var li = document.createElement('li');
    var link = document.createElement('a');

    link.href = this.href;
    link.textContent = this.title;

    li.appendChild(link);

    return li;
}

function SubMenu(id, className, items, title, href) {
    Menu.call(this, id, className, items);
    this.title = title;
    this.href = href;
}

SubMenu.prototype = Object.create(Menu.prototype);

SubMenu.prototype.render = function () {
    if(this.title && this.href) {
        var menuItem = new MenuItem(this.href, this.title).render();
        menuItem.appendChild(Menu.prototype.render.call(this));
        return menuItem;
    }else {
        return Menu.prototype.render.call(this);
    }
}
