# Web Development Project 4 - *Country Explorer*

Submitted by: **Damaris Campos**

This web app: **Country Explorer allows users to discover random countries along with their attributes, such as language, region, and timezone. Users can ban specific attributes from appearing in future requests, enabling a tailored exploration experience.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [x] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from their session


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./src/assets/img/country-ban.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the main challenges was understanding the structure of the API response from the countries API. Initially, it took some time to correctly access the attributes like languages, region, timezones, and flag images. Debugging the structure of the JSON response and ensuring the right attributes were extracted was crucial.

## License

    Copyright [2024] [Damaris Campos]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.