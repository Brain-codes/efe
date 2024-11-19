# **FUNDAH Mobile Flutter App**

This is the **FUNDAH Mobile** app built using Flutter. It’s designed to offer a smooth experience with beautiful animations and user interactions. This documentation will guide you through setting up the project, whether you are using **FVM** (Flutter Version Management) or the standard Flutter installation.

---

## **Table of Contents**

- [Project Setup](#project-setup)
  - [Option 1: Setting Up with FVM (Recommended)](#option-1-setting-up-with-fvm-recommended)
  - [Option 2: Setting Up Without FVM](#option-2-setting-up-without-fvm)
- [Running the Project](#running-the-project)
- [Common Issues and Solutions](#common-issues-and-solutions)
- [Additional Information](#additional-information)

---

## **Project Setup**

### **Option 1: Setting Up with FVM (Recommended)**

Using **FVM** ensures you are using the correct version of Flutter for the project, preventing version conflicts and providing a consistent development environment.

#### **1. Install FVM**
To install **FVM** (Flutter Version Management), follow these steps based on your operating system:

- **For macOS / Linux**:
  ```bash
  brew tap leoafarias/fvm
  brew install fvm
  ```

- **For Windows**:
  Install **FVM** using **Dart**:
  ```bash
  dart pub global activate fvm
  ```

#### **2. Clone the Project**
Clone the repository to your local machine:
```bash
git clone <repository_url>
cd fundah_mobile
```

#### **3. Install Flutter Version with FVM**
After cloning the project, use FVM to install the correct Flutter version (as specified by the `.fvm` directory in this repo):

```bash
fvm install
```

This will automatically fetch the Flutter version specified in the `fvm_config.json` file or `.fvm/flutter_sdk` folder.

#### **4. Set Flutter Version with FVM**
Ensure FVM uses the correct Flutter version for this project:
```bash
fvm use stable
```

#### **5. Configure FVM in VS Code**
If you are using **VS Code**, you can set FVM to always use the correct Flutter version for the project:
1. Open the command palette (Ctrl+Shift+P or Cmd+Shift+P on macOS).
2. Type **Flutter: Change SDK**.
3. Select the `.fvm/flutter_sdk` folder located inside your project directory.

Additionally, add the following settings to `.vscode/settings.json` in the project root directory:
```json
{
  "dart.flutterSdkPath": ".fvm/flutter_sdk"
}
```

---

### **Option 2: Setting Up Without FVM**

If you prefer not to use **FVM** and want to manually install Flutter on your system, follow these steps:

#### **1. Install Flutter**
If you don’t have Flutter installed, follow the installation guide for your operating system:

- [Flutter Installation for Windows](https://flutter.dev/docs/get-started/install/windows)
- [Flutter Installation for macOS](https://flutter.dev/docs/get-started/install/macos)
- [Flutter Installation for Linux](https://flutter.dev/docs/get-started/install/linux)

Once Flutter is installed, ensure you are on the **stable** channel and update Flutter to the latest stable version:

```bash
flutter channel stable
flutter upgrade
```

#### **2. Clone the Project**
Clone the repository to your local machine:
```bash
git clone <repository_url>
cd fundah_mobile
```

#### **3. Manually Install the Correct Flutter Version**
Ensure that your globally installed Flutter version matches the one used in the project. You can find the required version by looking at the `fvm_config.json` or `.fvm/flutter_sdk/version` file.

To manually switch Flutter versions, run:
```bash
flutter version <version_number>
```

Alternatively, you can continue with the **latest stable version** if no specific version is required.

---

## **Running the Project**

After setting up the project with either **FVM** or manually, you can now run the app on an emulator or a connected device.

1. **Open the project in VS Code** (or your preferred IDE):
   ```bash
   code .
   ```

2. **Run the app**:
   - Select a connected device or emulator.
   - Open the command palette (Ctrl+Shift+P or Cmd+Shift+P).
   - Type **Flutter: Select Device** to choose the correct device.
   - Press **F5** or **Run > Start Debugging** to start the app.

Alternatively, you can run the app from the terminal:
```bash
fvm flutter run
```

---

## **Common Issues and Solutions**

### **Issue 1: Flutter Version Mismatch**
If you see an error about Flutter version mismatch, ensure that the Flutter version you are using matches the version specified in the project. Using **FVM** helps avoid this issue.

### **Issue 2: Missing Dependencies**
If you encounter errors related to missing packages, run:
```bash
fvm flutter pub get
```

### **Issue 3: Device Not Found**
If no device is found, ensure that:
- Your emulator is running or your physical device is connected.
- You have the appropriate platform tools installed (`adb` for Android, etc.).

You can check connected devices using:
```bash
fvm flutter devices
```

---

## **Additional Information**

- **Project Requirements**: This project requires **Flutter 3.x** and **Dart 3.x**.
- **Supported Platforms**: This project supports both **iOS** and **Android** platforms.
- **Flutter Version**: The project is configured to use the **stable** channel of Flutter.

---

## **Contributing**

Feel free to fork the repository, make changes, and submit a pull request. Ensure you follow the coding standards and provide proper documentation for your changes.

---

### **License**
This project is licensed under [Palmview Technologies License](LICENSE).
