import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Cargar variables de entorno
process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET;

const registerUserController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "All fields (username and password) are required.",
      });
    }

    // Encriptar la contraseña con bcrypt
    const salt = await bcrypt.genSalt(10); // Generar un "salt" para la contraseña
    const hashedPassword = await bcrypt.hash(password, salt); // Encriptar la contraseña

    // Crear el nuevo usuario con la contraseña encriptada
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully.",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const loginUserController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: 400,
        error: "All fields (username and password) are required.",
      });
    }

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        status: 401,
        error: "Invalid username or password.",
      });
    }

    // Comparar la contraseña proporcionada con la almacenada (encriptada)
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        status: 401,
        error: "Invalid username or password.",
      });
    }

    // Crear el token JWT
    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "1h", // El token expira en 1 hora
    });

    res.status(200).json({
      message: "Login successful.",
      token,
    });
  } catch (error) {
    next(error);
  }
};

export { registerUserController, loginUserController };
