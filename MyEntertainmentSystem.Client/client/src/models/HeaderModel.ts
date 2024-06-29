import { v4 as uuid } from 'uuid';


export class HeaderChildren {
  id: string;
  name: string;
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
} 

export class HeaderModel {
  id?: string | null;
  name?: string | null;
  url?: string | null;
  right?: boolean;
  children?: Array<HeaderChildren> | null;
  
  constructor(id?: string | null, name?: string | null, url?: string | null, right?: boolean, children?: Array<HeaderChildren> | null) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.right = right;
    this.children = children;
  }
}

export var header = [
  new HeaderModel(uuid(), "Admin", null, false, [
    new HeaderChildren(uuid(), "Hobbies", "admin-hobbies"),
  ]),
  new HeaderModel(uuid(), "Hobbies", null, false, [
    new HeaderChildren(uuid(), "My List", "my-list"),
    new HeaderChildren(uuid(), "Releases", "releases")
  ]),
  new HeaderModel(uuid(), "Community", null, false, [
    new HeaderChildren(uuid(), "Blogs", "blogs"),
    new HeaderChildren(uuid(),"Forum", "forum"),
    new HeaderChildren(uuid(),"Forums", "forums"),
    new HeaderChildren(uuid(),"Quiz", "quiz"),
    new HeaderChildren(uuid(),"Dashboard", "dashboard")
  ]),
  new HeaderModel(uuid(),"Socials", null, false, [
    new HeaderChildren(uuid(),"Messenger", "messenger"),
    new HeaderChildren(uuid(),"Friends Profiles", "friends-profiles"),
  ]),
  new HeaderModel(uuid(),"Purchases", null, false, [
    new HeaderChildren(uuid(),"Add Order", "friends-profiles"),
    new HeaderChildren(uuid(),"View Purchase History", "friends-profiles"),
    new HeaderChildren(uuid(),"Cart", "friends-profiles"),
  ]),
  new HeaderModel(uuid(),"My Forms", "my-forms", false, null),
  new HeaderModel(uuid(),"Contact Us", "contact-us", true, null),
  new HeaderModel(uuid(),"Avatar", null, true, [
    new HeaderChildren(uuid(),"Settings", "settings"),
    new HeaderChildren(uuid(),"Logout", "log-out"),
  ]),
];