import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  //   { create: async () => {} },
  //   { sendMail: async () => {} }

  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "I have a bug",
        screenshot:
          "data:image/png;base64d-string inicial para fazer o teste passar.",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "I have a bug",
        screenshot:
          "data:image/png;base64d-string inicial para fazer o teste passar.",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "I have a bug",
        screenshot: "jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot:
          "data:image/png;base64d-string inicial para fazer o teste passar.",
      })
    ).rejects.toThrow();
  });
});
