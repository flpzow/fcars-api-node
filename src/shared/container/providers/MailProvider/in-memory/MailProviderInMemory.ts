import { IMailProvider } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private messasge: any[] = [];

  async sendMail(
    to: string,
    subject: string,
    variable: any,
    path: string
  ): Promise<void> {
    this.messasge.push({
      to,
      subject,
      variable,
      path,
    });
  }
}

export { MailProviderInMemory };
