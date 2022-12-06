const show = (th) => {
  const parent = th.parentElement;
  parent.children[2].classList.remove("hide");
};

const hide = (th) => {
  const parent = th.parentElement;
  parent.children[2].classList.add("hide");
};
