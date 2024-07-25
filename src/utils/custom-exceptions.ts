import {Response} from 'express';

export class NotFountException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundException';
  }
}
export class BadRequestException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestException';
  }
}
export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }
}
export class ForbiddenException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ForbiddenException';
  }
}
export class ConflictException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConflictException';
  }
}
export class InternalServerErrorException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InternalServerErrorException';
  }
}
export class ServiceUnavailableException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServiceUnavailableException';
  }
}
export class GatewayTimeoutException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GatewayTimeoutException';
  }
}
export class UnprocessableEntityException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnprocessableEntityException';
  }
}
export class TooManyRequestsException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TooManyRequestsException';
  }
}
export class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotImplemented';
  }
}
export class PaymentRequired extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PaymentRequired';
  }
}
export class RequestTimeout extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RequestTimeout';
  }
}
export class Conflict extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Conflict';
  }
}
export class Gone extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Gone';
  }
}
export class LengthRequired extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LengthRequired';
  }
}
export class PreconditionFailed extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PreconditionFailed';
  }
}
export class PayloadTooLarge extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PayloadTooLarge';
  }
}
export class URITooLong extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'URITooLong';
  }
}
export class UnsupportedMediaType extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnsupportedMediaType';
  }
}
export class RangeNotSatisfiable extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RangeNotSatisfiable';
  }
}
export class ExpectationFailed extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ExpectationFailed';
  }
}
export class ImATeapot extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ImATeapot';
  }
}
export class MisdirectedRequest extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MisdirectedRequest';
  }
}
export class UnprocessableEntity extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnprocessableEntity';
  }
}
export class Locked extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Locked';
  }
}
export class FailedDependency extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FailedDependency';
  }
}
export class TooEarly extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TooEarly';
  }
}
export class UpgradeRequired extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UpgradeRequired';
  }
}
export class PreconditionRequired extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PreconditionRequired';
  }
}
export class TooManyRequests extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TooManyRequests';
  }
}
export class RequestHeaderFieldsTooLarge extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RequestHeaderFieldsTooLarge';
  }
}
export class UnavailableForLegalReasons extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnavailableForLegalReasons';
  }
}
export class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InternalServerError';
  }
}
export class BadGateway extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadGateway';
  }
}
export class ServiceUnavailable extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServiceUnavailable';
  }
}
export class AppExceptionHandler {
  public static handle(error: Error, res: Response) {
    if (error instanceof NotFountException) {
      return res.status(404).json({
        message: error.message,
        status: 404,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof BadRequestException) {
      return res.status(400).json({
        message: error.message,
        status: 400,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof UnauthorizedException) {
      return res.status(401).json({
        message: error.message,
        status: 401,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof ForbiddenException) {
      return res.status(403).json({
        message: error.message,
        status: 403,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof ConflictException) {
      return res.status(409).json({
        message: error.message,
        status: 409,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof InternalServerErrorException) {
      return res.status(500).json({
        message: error.message,
        status: 500,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof ServiceUnavailableException) {
      return res.status(503).json({
        message: error.message,
        status: 503,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof GatewayTimeoutException) {
      return res.status(504).json({
        message: error.message,
        status: 504,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof UnprocessableEntityException) {
      return res.status(422).json({
        message: error.message,
        status: 422,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof TooManyRequestsException) {
      return res.status(429).json({
        message: error.message,
        status: 429,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof NotImplemented) {
      return res.status(501).json({
        message: error.message,
        status: 501,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof PaymentRequired) {
      return res.status(402).json({
        message: error.message,
        status: 402,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof RequestTimeout) {
      return res.status(408).json({
        message: error.message,
        status: 408,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof Conflict) {
      return res.status(409).json({
        message: error.message,
        status: 409,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof Gone) {
      return res.status(410).json({
        message: error.message,
        status: 410,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof LengthRequired) {
      return res.status(411).json({
        message: error.message,
        status: 411,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof PreconditionFailed) {
      return res.status(412).json({
        message: error.message,
        status: 412,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof PayloadTooLarge) {
      return res.status(413).json({
        message: error.message,
        status: 413,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    } else if (error instanceof URITooLong) {
      return res.status(414).json({
        message: error.message,
        status: 414,
        error: error,
        stack: error.stack,
        name: error.name,
      });
    }

    return res.status(500).json({
      message: 'Internal server error',
      status: 500,
      error: error,
      stack: error.stack,
      name: error.name,
    });
  }
}
