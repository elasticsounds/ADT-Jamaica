# ADT Jamaica

## Description

This is the repository for the ADT (accessible digital textbooks) project in Jamaica. The folder contains 2 ePubs (both compressed and as in folder form). The ePubs were developed by Book Fusion designed to work with Book Fusion's platform although they can also be run in an ePub reader.

## Getting Started

To play the ePubs in Book Fusion's reader. follow the instructions below.

To play the ePubs offline on desktop, follw the instructions below.

To download and edit the ePubs, follow the instructions below.

### Prerequisites

- Ensure you have [Flutter](https://flutter.dev/docs/get-started/install) installed on your machine.
- A Windows environment is necessary to run the Windows executable.
- [Git](https://git-scm.com/downloads) for cloning the repository.

### Installation

1. **Clone the repository:**
   ```
   git clone [URL of your Git repository]
   cd [repository name]
   ```

2. **Check for any Flutter setup issues:**
   ```
   flutter doctor
   ```
   Run `flutter doctor` to ensure Flutter is correctly installed and no issues are present.

3. **Get Flutter dependencies:**
   ```
   flutter pub get
   ```

4. **Run the application:**
   For development purposes, you can run the application using:
   ```
   flutter run -d windows
   ```
   To build and run the executable:
   ```
   flutter build windows
   ```
   This will generate an executable in the `build\windows\runner\Release` directory.

### Running the Executable

- Navigate to the `build\windows\runner\Release` directory.
- Run the `.exe` file to start the application.

## Known Issues and Troubleshooting

- If you encounter any DLL-related issues, ensure that all necessary DLL files are present in the executable directory.
- For any issues related to Flutter dependencies, run `flutter pub get` to fetch the latest versions of the dependencies.

## Contributing

You may branch and develop your own version, or create additional ADTs in the form of JSONs with referenced assets that are compatible with the app shell (bookhshelf).
This repository is currently maintained by UNICEF Nicaragua, Fundación Zamora Terán and WERN.

## License

This project is open source and available under the MIT License.

```
MIT License

Copyright (c) 2023 UNICEF

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
