import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const signToken = ({
  payload,
  privateKey,
  options = {
    algorithm: "HS256",
    expiresIn: 500000,
  },
}) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) {
        throw reject(error);
      }
      resolve(token);
    });
  });
};

export const verifyToken = ({ token, secretOrPublicKey }) => {
  return (
    new Promise() <
    TokenPayload >
    ((resolve, reject) => {
      jwt.verify(token, secretOrPublicKey, (error, decoded) => {
        if (error) {
          throw reject(error);
        }
        resolve(decoded);
      });
    })
  );
};
