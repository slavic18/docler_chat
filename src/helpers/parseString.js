import React from 'react';
import reactStringReplace from 'react-string-replace';

/**
 * Get additional message params such as video url, type, image url etc.
 * @param text
 * @return {object}
 */
export const getMessageAdditionalParams = (text) => {
  let result;
  let messageAdditionalParams = {
    type: 'simple',
  };
  if (result = getYoutubeObject(text)) {
    messageAdditionalParams = {...messageAdditionalParams, ...result};
  } else if (result = getImageObject(text)) {
    messageAdditionalParams = {...messageAdditionalParams, ...result};
  }
  return messageAdditionalParams;
};

/**
 * Get youtube video id based on string
 * @example ```js
 * getYoutubeObject('http://www.youtube.com/watch?v=My2FRPA3Gf8')
 * getYoutubeObject('http://youtu.be/My2FRPA3Gf8')
 * getYoutubeObject('https://youtube.googleapis.com/v/My2FRPA3Gf8')
 * ```
 * @param url
 * @return {({type: string, id: string}|boolean)}
 */
export const getYoutubeObject = (url) => {
  url.match(/(http:|https:|)\/\/(www.)?(youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

  if (RegExp.$3.indexOf('youtu') === -1) {
    return false;
  }
  const id = RegExp.$6;

  return {
    id: id,
    type: 'youtube',
    videoUrl: `//www.youtube.com/embed/${id}`,
    thumbnailUrl: `//img.youtube.com/vi/${id}/maxresdefault.jpg`
  };
};

/**
 * Get image object from url
 * @example ```js
 * getImageObject('http://news.stanford.edu/news/2012/september/images/online_keyboard_news.jpg')
 * @param url
 * @return {*}
 */
export const getImageObject = (url) => {
  const regexp = new RegExp(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i);
  const isImageUrl = regexp.test(url);
  if (!isImageUrl) {
    return false;
  }

  return {
    type: 'image',
    url: url.match(regexp)[0],
  }
};

/**
 * replace urls in text with links
 * @param text
 * @return {string|array}
 */
export const convertPlainTextIntoLinks = (text) => {
  const urlRegex = /(https?:\/\/\S+)/g;

  return reactStringReplace(text, urlRegex, (match, i) => (
    <a key={match + i} href={match} target="_blank">{match}</a>
  ));
};

