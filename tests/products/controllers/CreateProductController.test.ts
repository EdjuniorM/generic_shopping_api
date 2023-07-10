import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductController } from "../../../src/modules/Products/presenter/controllers/CreateProductController";
import { ICreateProductUseCase } from "../../../src/modules/Products/domain/useCases/CreateProductUseCase/ICreateProductUseCase";
import { AppError } from "../../../src/core/errors/AppError";



describe("CreateProductController", () => {
  let createProductController: CreateProductController;
  let createProductUseCaseMock: jest.Mocked<ICreateProductUseCase>;
  let requestMock: Partial<Request>;
  let responseMock: Partial<Response>;

  beforeEach(() => {
    createProductUseCaseMock = {
      execute: jest.fn(),
    } as Partial<ICreateProductUseCase> as jest.Mocked<ICreateProductUseCase>;

    container.register<ICreateProductUseCase>("CreateProductUseCase", {
      useValue: createProductUseCaseMock,
    });

    requestMock = {
      body: {
        name: "Test Product",
        imageUrl: "https://example.com/image.jpg",
      },
    };

    responseMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    createProductController = new CreateProductController();
  });

  test("Deve criar um novo produto", async () => {
    await createProductController.execute(
      requestMock as Request,
      responseMock as Response
    );

    expect(createProductUseCaseMock.execute).toHaveBeenCalledWith({
      name: "Test Product",
      imageUrl: "https://example.com/image.jpg",
    });

    expect(responseMock.status).toHaveBeenCalledWith(201);
    expect(responseMock.json).toHaveBeenCalled();
  });

  test("Deve lançar um erro se o nome estiver vazio ou nulo", async () => {
    requestMock.body.name = "";
    // Execute o controller com a requisição de exemplo
    let error: AppError | undefined;
    try {
      await createProductController.execute(
        requestMock as Request,
        responseMock as Response
      );
    } catch (e) {
      error = e;
    }

    // Verifique se o erro capturado é uma instância de AppError
    expect(error).toBeInstanceOf(AppError);
    expect(error?.message).toBe("Null or empty name");
  });
});