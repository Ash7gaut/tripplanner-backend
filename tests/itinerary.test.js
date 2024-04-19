import { it, describe } from "vitest";
import request from "supertest";
import { app } from "../app";

// je décris sur quel endpoint je tape
describe("GET /itinerary/03c332d3-fa90-46f5-8f11-c0fa8493839b", () => {
  // on décrit ensuite ce qu'on teste
  it("responds with the correct JSON data", () => {
    return request(app)
      .get("/v1/itinerary/03c332d3-fa90-46f5-8f11-c0fa8493839b")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, {
        createdAt: "2024-04-16T13:31:32.648Z",
        id: "03c332d3-fa90-46f5-8f11-c0fa8493839b",
        updatedAt: "2024-04-16T13:31:32.648Z",
        prompt: "Je veux faire un tour d'Italie en 2 semaines, quels sont les meilleurs lieux?",
        answer: {
          "itinerary": [
              {
                  "name": "Rome",
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          84.1522,
                          41.9028
                      ]
                  },
                  "description": "Visit the Colosseum, Roman Forum, Vatican City, Sistine Chapel, and Trevi Fountain."
              },
              {
                  "name": "Florence",
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          11.2565,
                          43.7697
                      ]
                  },
                  "description": "Explore the Uffizi Gallery, Ponte Vecchio, Duomo di Firenze, and Accademia Gallery."
              },
              {
                  "name": "Venice",
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          12.3333,
                          45.4542
                      ]
                  },
                  "description": "Experience gondola rides, St. Mark's Basilica, Doge's Palace, and Rialto Bridge."
              },
              {
                  "name": "Amalfi Coast",
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          14.5556,
                          40.6422
                      ]
                  },
                  "description": "Relax on the beaches, visit Positano, Amalfi, and Ravello, and enjoy the stunning views."
              },
              {
                  "name": "Milan",
                  "location": {
                      "type": "Point",
                      "coordinates": [
                          9.1918,
                          45.5227
                      ]
                  },
                  "description": "Discover Leonardo da Vinci's Last Supper, Sforza Castle, and Galleria Vittorio Emanuele II."
              }
          ]
      },
      });
  });
});

// // je décris sur quel endpoint je tape
// describe("GET /itinerary/12345", () => {
//   // on décrit ensuite ce qu'on teste
//   it("returns a 404 if product does not exist", () => {
//     return request(app)
//       .get("/itinerary/12345")
//       .expect("Content-Type", "application/json")
//       .expect(404);
//   });
// });
