const BASE_URL = "https://graph.instagram.com/me";

const access_token =
  "IGQVJXSFhqMGdtdHBUTFJWaWlNNHRQQk9SWUFBU0NXblNHODQ3My1hMzVWRDExLXAzLUZAwaTQyamF6bm9ISG8wdkRBcmdhN3FTU21FTDZAid0xtbkJyRkdrSk84aHZAUWi1YYVRGR3JnTm5oVFVyeGY1QU02QXItbEw1NlRN";

const createPhotosDom = ({ data }) => {
  const $sectionPhotos = document.getElementById("photos");
  const $fragment = document.createDocumentFragment();

  data.map(({ id, media_url }) => {
    const $section = document.createElement("section");
    $section.setAttribute("class", "photos-post");
    $section.innerHTML = `<img src=${media_url} alt=${id} />`;
    $fragment.appendChild($section);
  });
  $sectionPhotos.appendChild($fragment);
};

const getUserInfo = async () => {
  const response = await fetch(
    `${BASE_URL}?fields=id,username,media_count&access_token=${access_token}`
  );
  const data = await response.json();
  const { username } = data;
  const $username = document.getElementById("user-name");
  $username.textContent = username;
};

const getMediaUserContent = async () => {
  const response = await fetch(
    `${BASE_URL}/media?fields=id,media_url&access_token=${access_token}`
  );
  const data = await response.json();

  createPhotosDom(data);
  // console.log(data);
};

getUserInfo();
getMediaUserContent();
