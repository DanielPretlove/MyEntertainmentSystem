export class HeaderChildren {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
} 

export class HeaderModel {
  name?: string | null;
  url?: string | null;
  right?: boolean;
  children?: Array<HeaderChildren> | null;
  
  constructor(name?: string | null, url?: string | null, right?: boolean, children?: Array<HeaderChildren> | null) {
    this.name = name;
    this.url = url;
    this.right = right;
    this.children = children;
  }
}

export var header = [
  new HeaderModel("Admin", null, false, [
    new HeaderChildren("Hobbies", "admin-hobbies"),
  ]),
  new HeaderModel("Hobbies", null, false, [
    new HeaderChildren("My List", "my-list"),
    new HeaderChildren("Releases", "releases")
  ]),
  new HeaderModel("Community", null, false, [
    new HeaderChildren("Blogs", "blogs"),
    new HeaderChildren("Forum", "forum"),
    new HeaderChildren("Forums", "forums"),
    new HeaderChildren("Quiz", "quiz"),
    new HeaderChildren("Dashboard", "dashboard")
  ]),
  new HeaderModel("Socials", null, false, [
    new HeaderChildren("Messenger", "messenger"),
    new HeaderChildren("Friends Profiles", "friends-profiles"),
  ]),
  new HeaderModel("Purchases", null, false, [
    new HeaderChildren("Add Order", "friends-profiles"),
    new HeaderChildren("View Purchase History", "friends-profiles"),
    new HeaderChildren("Cart", "friends-profiles"),
  ]),
  new HeaderModel("My Forms", "my-forms", false, null),
  new HeaderModel("Contact Us", "contact-us", true, null),
  new HeaderModel("Avatar", null, true, [
    new HeaderChildren("Settings", "settings"),
    new HeaderChildren("Logout", "log-out"),
  ]),
];